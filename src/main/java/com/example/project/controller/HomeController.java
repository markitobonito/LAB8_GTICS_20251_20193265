package com.example.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/")
public class HomeController {


    @GetMapping("")
    public String mostrarFormRegistro(Model model) {

        return "redirect:/posts";        // tu registro.html
    }


}
