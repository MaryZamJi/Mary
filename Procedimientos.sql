/*aca se crea el procedimento*/
create procedure sp_ver_pacientes
as
begin
select * from Paciente
end
go

select * from Paciente

/*aca se ejecuta el procedimiento*/
execute sp_ver_pacientes

/* procedimento pr obtener un paciente  a traves de un select*/
create procedure sp_obtener_paciente(
@cedula_pa int
)
as
	begin
		select * from Paciente where cedulaPaciente = @cedula_pa
	end
go

select *from Paciente where cedulaPaciente =1000

execute sp_obtener_paciente 1000

/* procedimento pr obtener doctor con a*/
create procedure sp_obtener_doctor_con_letra(
@letra char (3)
)
as
	begin
		select * from Doctor where nombre like '%'+@letra+'%'
	end
go

execute sp_obtener_doctor_con_letra 'A'

create procedure sp_insertar_doctor(
@cedulaDoctor int ,
@codigoDoctor int,
@nombre varchar (50),
@apellido1 varchar(50),
@apellido2 varchar(50),
@numTelefono int
)

as
	begin
		insert into Doctor (cedulaDoctor,codigoDoctor,nombre,apellido1,apellido2,numTelefono)
		values (@cedulaDoctor,@codigoDoctor,@nombre,@apellido1,@apellido2,@numTelefono)
	end

go

exec sp_insertar_doctor 234567, 765432, 'mary','zambrana','jimenez',60544152

create procedure sp_insertar_paciente(
@cedulaPaciente int ,
@nombre varchar (50),
@apellido1 varchar(50),
@apellido2 varchar(50),
@direccion varchar(50),
@numTelefono int
)

as
	begin
		insert into Paciente(cedulaPaciente,nombre,apellido1,apellido2,direccion,numTelefono)
		values (@cedulaPaciente,@nombre,@apellido1,@apellido2,@direccion,@numTelefono)
	end

go

exec sp_insertar_paciente 234589, 765478, 'Krosty','Soto','Villalobos',88976543

CREATE PROCEDURE sp_insertar_doctor_validado(
	@cedulaDoctor int ,
	@codigoDoctor int,
	@nombre varchar (50),
	@apellido1 varchar(50),
	@apellido2 varchar(50),
	@numTelefono int

)

AS
IF NOT EXISTS (SELECT * FROM Doctor WHERE cedulaDoctor = @cedulaDoctor)
		BEGIN 
			insert into Doctor (cedulaDoctor,codigoDoctor,nombre,apellido1,apellido2,numTelefono)
			values (@cedulaDoctor,@codigoDoctor,@nombre,@apellido1,@apellido2,@numTelefono)
		    Print 'El doc se registró  epicamente ';
		END
ELSE 
		BEGIN
			Print 'El doc no se registró  epicamente ';
		END

GO

CREATE PROCEDURE sp_insertar_paciente_validado(
	@cedulaPaciente int ,
	@nombre varchar (50),
	@apellido1 varchar(50),
	@apellido2 varchar(50),
	@direccion varchar(50),
	@numTelefono int

)

AS
IF NOT EXISTS (SELECT * FROM Paciente WHERE cedulaPaciente = @cedulaPaciente)
		BEGIN 
			insert into Paciente(cedulaPaciente,nombre,apellido1,apellido2,direccion,numTelefono)
		values (@cedulaPaciente,@nombre,@apellido1,@apellido2,@direccion,@numTelefono)
		    Print 'El paciente se registró  epicamente ';
		END
ELSE 
		BEGIN
			Print 'El paciente no se registró  epicamente ';
		END

GO

CREATE PROCEDURE sp_eliminar_doctor(
	@cedulaDoctor int
)
as
	begin
		delete from Doctor where cedulaDoctor = @cedulaDoctor
	end

go

CREATE PROCEDURE sp_eliminar_paciente(
	@cedulaPaciente int
)
as
	begin
		delete from Paciente where cedulaPaciente = @cedulaPaciente
	end

go
