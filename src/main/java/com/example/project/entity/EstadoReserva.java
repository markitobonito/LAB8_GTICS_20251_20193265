package com.example.project.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "EstadoReserva")
public class EstadoReserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idEstadoReserva", nullable = false)
    private int idEstadoReserva;
    @Column(name="estado")
    private String estado;
}
