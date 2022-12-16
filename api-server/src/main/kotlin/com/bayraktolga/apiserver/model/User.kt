package com.bayraktolga.apiserver.model

import jakarta.persistence.*
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder


@Table(name = "tb_users")
@Entity
class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long,
        val username: String,
        val email: String,
        val password: String,

        @ManyToMany(fetch = FetchType.LAZY, cascade = [CascadeType.PERSIST])
        @JoinTable(
                joinColumns = [JoinColumn(name = "user_id")],
                inverseJoinColumns = [JoinColumn(name = "role_id")]
        )
        val roles: Set<Role> = HashSet(),



        @ManyToMany(fetch = FetchType.LAZY, cascade = [CascadeType.PERSIST])
        @JoinColumn(name = "group_id", nullable = false)
        val group: Set<Group>? = HashSet()

) {
        fun comparePassword(password: String): Boolean{
                return BCryptPasswordEncoder().matches(password, password)
        }
}