package com.bayraktolga.apiserver.repository

import com.bayraktolga.apiserver.model.Group
import org.springframework.data.jpa.repository.JpaRepository

interface GroupRepository: JpaRepository<Group, Long> {
}