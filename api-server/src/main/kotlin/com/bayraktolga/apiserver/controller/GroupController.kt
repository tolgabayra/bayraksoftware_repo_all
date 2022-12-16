package com.bayraktolga.apiserver.controller

import com.bayraktolga.apiserver.dto.GroupDto
import com.bayraktolga.apiserver.dto.Message
import com.bayraktolga.apiserver.model.Group
import com.bayraktolga.apiserver.service.GroupService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RequestMapping("api/v1/groups")
@RestController
class GroupController(private val groupService: GroupService) {

    @PostMapping
    fun createGroup(@RequestBody requestBody: GroupDto){
        return this.groupService.create(requestBody)
    }
    @DeleteMapping("{id}")
    fun deleteGroup(@PathVariable id: Long): ResponseEntity<Message> {
        this.groupService.delete(id)
        return ResponseEntity.ok(Message("Group has been deleted."))
    }
    @PutMapping("{id}")
    fun updateGroup(@PathVariable id: Long, @RequestBody requestBody: GroupDto): ResponseEntity<Any> {
        return ResponseEntity.ok(groupService.update(id, requestBody))
    }
    @GetMapping("{id}")
    fun showGroup(@PathVariable id: Long): ResponseEntity<Optional<Group>> {
        return ResponseEntity.ok(groupService.show(id))
    }
    @GetMapping
    fun listGroup(): ResponseEntity<List<Group>> {
        return ResponseEntity.ok(groupService.list())
    }
}