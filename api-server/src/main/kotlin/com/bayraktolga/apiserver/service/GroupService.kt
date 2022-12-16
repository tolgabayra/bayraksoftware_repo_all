package com.bayraktolga.apiserver.service

import com.bayraktolga.apiserver.dto.GroupDto
import com.bayraktolga.apiserver.model.Group
import com.bayraktolga.apiserver.repository.GroupRepository
import java.util.*

class GroupService(private val groupRepository: GroupRepository) {


    fun create(group: GroupDto){
        val newGroup = Group(
                id = null,
                name = group.name,
                description = group.description
        )
    }

    fun delete(id: Long){
        return groupRepository.deleteById(id)
    }

    fun update(id: Long, group: GroupDto): Any {
            val dbGroup = groupRepository.findById(id)
        if (dbGroup != null){
            val newGroup = Group(
                    id = null,
                    name = group.name,
                    description = group.description
            )
            groupRepository.save(newGroup)
            return newGroup
        }else{
            return "Group does not exist"
        }


    }

    fun show(id: Long): Optional<Group> {
        return groupRepository.findById(id)
    }

    fun list(): List<Group>{
        val groups: List<Group> = groupRepository.findAll()
        return groups
    }
}