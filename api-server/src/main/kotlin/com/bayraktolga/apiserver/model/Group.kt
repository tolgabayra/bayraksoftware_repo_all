package com.bayraktolga.apiserver.model

import jakarta.persistence.*

@Table(name = "tb_groups")
@Entity
class Group(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        val name: String,
        val description: String,


) {
}