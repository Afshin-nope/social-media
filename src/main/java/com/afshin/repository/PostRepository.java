package com.afshin.repository;

import com.afshin.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("select p from Post p where p.user.Id=:userId")
    public List<Post> findPostByUserId(Integer userId);
}
