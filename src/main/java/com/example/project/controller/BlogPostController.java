package com.example.project.controller;
import com.example.project.entity.BlogPost;
import com.example.project.service.BlogPostService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/posts")
public class BlogPostController {

    private final BlogPostService service;
    public BlogPostController(BlogPostService service) {
        this.service = service;
    }
    @GetMapping({"", "/"})
    public String listarPosts(Model model) {
        model.addAttribute("posts", service.findAll());
        return "posts/lista";
    }
    @GetMapping("/nuevo")
    public String mostrarFormularioCrear(BlogPost blogPost) {
        return "posts/nuevo";
    }
    @PostMapping("/nuevo")
    public String crearPost(@Valid BlogPost blogPost, BindingResult result) {
        if (result.hasErrors()) {
            return "posts/nuevo";
        }
        service.save(blogPost);
        return "redirect:/posts";
    }
    @GetMapping("/{id}")
    public String verPost(@PathVariable Long id, Model model) {
        var post = service.findById(id).orElseThrow(() -> new IllegalArgumentException("ID inválido:" + id));
        model.addAttribute("post", post);
        return "posts/detalle";
    }

    @GetMapping("/editar/{id}")
    public String mostrarFormularioEditar(@PathVariable Long id, Model model) {
        var post = service.findById(id).orElseThrow(() -> new IllegalArgumentException("ID inválido:" + id));
        model.addAttribute("blogPost", post);
        return "posts/editar";
    }
    @PostMapping("/editar/{id}")
    public String actualizarPost(@PathVariable Long id, @Valid BlogPost blogPost, BindingResult result) {
        if (result.hasErrors()) {
            return "posts/editar";
        }
        blogPost.setId(id);
        service.save(blogPost);
        return "redirect:/posts";
    }

    @PostMapping("/eliminar/{id}")
    public String eliminarPost(@PathVariable Long id) {
        service.deleteById(id);
        return "redirect:/posts";
    }
}
