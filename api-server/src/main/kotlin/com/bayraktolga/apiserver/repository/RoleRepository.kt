package com.bayraktolga.apiserver.repository

import com.bayraktolga.apiserver.model.Role
import org.springframework.data.jpa.repository.JpaRepository

interface RoleRepository: JpaRepository<Role, Long> {
}