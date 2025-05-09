package com.example.project.repository.admin;

import com.example.project.entity.EstadoEspacio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoEspacioRepository extends JpaRepository<EstadoEspacio, Integer> {
}
