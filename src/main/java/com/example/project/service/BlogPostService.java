package com.example.project.service;



import com.example.project.entity.BlogPost;
import com.example.project.repository.BlogPostRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    private final BlogPostRepository repository;

    public BlogPostService(BlogPostRepository repository) {
        this.repository = repository;
    }

    public List<BlogPost> findAll() {
        return repository.findAll();
    }

    public Optional<BlogPost> findById(Long id) {
        return repository.findById(id);
    }

    public BlogPost save(BlogPost post) {
        if (post.getFechaPublicacion() == null) {
            post.setFechaPublicacion(LocalDateTime.now());
        }
        return repository.save(post);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
