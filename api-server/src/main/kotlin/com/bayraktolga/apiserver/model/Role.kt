package com.bayraktolga.apiserver.model

import jakarta.persistence.*

@Table(name = "tb_roles")
@Entity
class Role(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        val role: String,

        ) {
}