package com.bayraktolga.apiserver.controller

import com.bayraktolga.apiserver.dto.Message
import com.bayraktolga.apiserver.model.Role
import com.bayraktolga.apiserver.model.User
import com.bayraktolga.apiserver.repository.UserRepository
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.security.Keys
import jakarta.servlet.http.Cookie
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Key
import java.util.*


@RestController
@RequestMapping("api/v1/auth")
class AuthController(
        private val userRepository: UserRepository,
) {
    private val passwordEncoder =  BCryptPasswordEncoder()


    var role = Role(
            id = null,
            role = "User"
    )

    @PostMapping("/register")
    fun register(@RequestBody body: User): ResponseEntity<User>{
        val newUser = User(
                id = 0,
                username = body.username,
                email = body.email,
                password = passwordEncoder.encode(body.password),
                roles = setOf(role),
                group = null
        )

       return ResponseEntity(userRepository.save(newUser), HttpStatus.CREATED)

    }


    @PostMapping("/login")
    fun login(@RequestBody body: User): ResponseEntity<Message>{
        val user = this.userRepository.findByEmail(body.email) ?: return ResponseEntity.badRequest().body(Message("Email Not Found"))
        if (user.password != body.password){
            return ResponseEntity.badRequest().body(Message("Invalid Password"))
        }
        val issuer = user.id.toString()
        val key: Key = Keys.secretKeyFor(SignatureAlgorithm.HS256)


        val access_token = Jwts.builder()
                .setIssuer(issuer)
                .setExpiration(Date(System.currentTimeMillis() + 60 * 24 * 1000)) // 1 day
                .signWith(key).compact()

        val refresh_token = Jwts.builder()
                .setIssuer(issuer)
                .signWith(key).compact()

        val cookie = Cookie("access_token", access_token)
        val cookie1 = Cookie("refresh_token", refresh_token)
        cookie.isHttpOnly = true
        cookie1.isHttpOnly = true

        return ResponseEntity.ok(Message("Login is successfully"))
    }



}