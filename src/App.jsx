import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import "./style.css";

import "./style1.css"
import Cylinder from  "./Cylinder";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
    <header>
        <h1>Welcome to the Car Showroom</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <Canvas flat camera={{ fov: 45 }}>
      <ambientLight />
      <Cylinder />
      <EffectComposer>
      <Bloom
      mipmapBlur
    intensity={7.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
   
  />
  <ToneMapping adaptive />
  </EffectComposer>
    </Canvas>
    <div>
    <section id="hero">
        <h2>Find Your Dream Car</h2>
        <p>Explore a wide range of luxury and affordable cars!</p>
        <button>Browse Cars</button>
    </section>

    <section id="cars">
        <h2>Our Collection</h2>
        <div class="car-grid">
            <div class="car">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhEQEBIQDw8VEA8VFRUQDw8QFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xABCEAABAwIDBQUEBwYEBwAAAAABAAIDBBESITEFE0FRYQYicYGRMlKhsRRCU5LB0fAjcqKy4fEVJGLSBzNDgpOjwv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4gooiwxXQcjajMhPJOQ04TkTByQIMhR44gU66nuuwQZoANp0dsI4p9sV1V0KDOloQcwl5KMWXoIWXFlSSmGaDyr6ZKPbYr0tRScgsqpoyDmPNBnkLpbmmZKY3FkzTUBOZGqClJSX4J9tD0WlRUdhotGKm6IMD6F0QX0PRepFF0XJKJB5ltF0RG0d1tupLKm56IMd2zuiH/h3RejjiUkgy0QYMdCE02jHJaEcKdZTi2iDDfSdEuaLovS/REN9KEGAylVxSrX+irpgQYstGljRrfdEgvhQYv0FDdT2Wy6NLyRoMd8aVljWrLGkagoEi1RWJUQCjYmYB8FVjExFCgLECtCJtuCBBFbNaFOL6hBRhJPRHZGL8ui0IoByQZW8kAxGjsg5oEN+SfhYUAGwW0XQw53C0GtQ548kGS6O5zVX0uLhkmfo7uWSehpjyQYjNm5rRgoAtFtMjRwZoAR0wCaipwjNjRA1AEsQJGphzkFzgUCr41VtOm22RLoETBZXESaLQuAIFRAmGMsrWCqSgthQ3NVg5VcUA3MQnNRyUF5QBc1BkajkoTygVkalntTciWkKBKZqzqqNaUqTmCDLMaiO4LiCsKch1SUAT1Jqgfgj5rTpmhZ8LloU7wgbabKzgOStG2+iMymz4oFt0mYGZJl9GLZIMENigIynKZjp76pmngNk7BTIM0UqjWW4LVfAgbhAjhCiZlh5JGU2QFD1x8iUdIq71ASRyXxqPel3PQNh67vEkJVYSIHQ9cxpUSLuNAyXqhchY1UvQGDl3Elw5dxoCOchOK45yG56DjihuKjnIT3IKSOS7yiPcgPKAMiTmCZkKVlcgWLVFCVEC1Mck7BklKdqfibZA1E+2qZgnzWe12aYjcg9HROWlE5efpJVqU8iDUAurU8GeapTPWjCEDMLEwAhseqzVTGC73tYL6uNrnkOZQFcEvI1Vj2xT30kf5th/hksT5LY2X9DnyxOaRa/eu1pOl8hl/qFxfK90HnZnJGd4Xs59m04Jbhe4tJBADiRbXy6rMrNmxDSKT0H4lB5GZADlsVtOwaMePT81k1AA4OHm380FJHJV8iDVVNuZSRrwg0Q9WEiz21QVhVDmg0A9WEiRZODoQUQSIG8amNLB6sHIGMS4XIIeoXoLuehueqOehlyAhchPcuEobyg4XITyukobigDKUpIUeUpeRAsSouFRAWFqcLDZUpmWTzBdAiL3T9FTlyPDTA8FoxRBoyCAcdLZaFPGpC260oaZB2hYbrUYgRsAQaypw21zIueQ4580Cu1tubslkdi8e045sj8ebuOH1tlfy1TtM3Ly4udn33ZvtyHujoLBE7QU0rXvcI3Pjc97g+MF7C0kkE29nXjbReUqJ3POBoJJyDRm7rl4INE7Sc43uczYdBwWls3bv0eVryXYQbSNGroj7bfG2Y5EA8FiUdXNH3RSRnDxfTmV/icd7eVlTaxLxvRHu3E2kja0saD9V7W/VvmCBlcDmg+t1223NG8xXMbtzO4aOba8Uw5gtGv+lvNedr9uSEkEm4JyusLY+1xaMSXwSxGmnsCXNMJG6eBzazc25mM9U7/hcwNnxSHIbuRjHywzN4OY9oIOQ16Z2zQDm2k4/wB0lLWnmnZtiTnSCc+EUv8AtSUuxagf9Cf/AMb/AMkCslWl3T3OWRRZNnyjWN48WkfMID6dw1BCArnZdUBlTnmSusFtUCQZ5IHHOPBXi2g5vtd4fxD80ox+ViqPN0G9FUhwuDcI7JF5dkzmG48xwcORWrDtJmHEThtYEHUE+HDqg1w9QuSNPUh+bSCOiaag6SooQpZBUlCcURyDIUFXFBeV1z0JzkFHoD0VxQ3oFiFF0qINGAJuFBgCZjagfp2cVoRxpCBy1KcXQM08YCLWbQbEzEfIc1GtXnO1dQQ0DhqfL+5QI7S7VzF3cfgF8gA0/MJ7ZXbOWNmJ5o6lp9uB3cqLE2yIbYejsuC8O+oDuFs/VLB1ig+j7Yr4H2lot/AXZvp3d5jH8bfVcPJZ8W0614Ia2SYgtuBG5wYAbgkMGWYy8DyXimykaEjwJHyTdLteeM3jnmYcsw83y0QeihrCXAPo6Z1zmdy3H6lG23t2mawwQRyseR7bHNgjiPvWZcu8Mlgt7R1FrOcyQf6mNuOt2gFZgmu4ucL35G3zQfQ6Ha1HuY45op60s7zt7UmNpdYgDJrsrOPLzXpezPadr5Gw0lBBEQHHCyd5GE2uXHdjkM18vpJYS13dJc6zWXeGvbIdHYAO83O5Jt7NuKC/tBLE4imlkhZkMUbjG+QDi5wzsdbaIP0TWbY3LMU7I2ZaYy6/qFgu7aUTzY4WE/WLAGeb23PwXxar7Qz1Df2sjnvHEm+Ic/FaPYbZsVZUbqaZ8ZLXGNjQ3FM9oJ3Qc7JpIGWR0I5XD6y+SKTOP6PJfMN3mF7vAvDgfIhZcklKXYZYzC4++3APJ1y0+JLUHs12GiqWuMf05jozZ7DJTyYH8rYI7nLnwXdsbAdT/s5KxgPCOpiezLh3ojKD4oGpuzUThiYA4Wvlnlz6jqLhYVZ2fjHAI1Mypi/5ElPJf6sVSxvmGSljj6KldtqVpDKuB8D3ey9zDHvOtiLO8WoMGq2QwcFmzbMatmsqOOqy5apBmy0ICXfTs4tv5n80/LUJKaUFBakmbEThbra4ubZcQm27bHFh8nX/AAWU5wQi4XQepZWsIBxAX4HJEEgOhB6g3XmopAWObxtceIzCDFM8vDYw4ucQGtaCXuJ4ADMoPU4kCYpin2VWtYX1FO+JoAN34Y5MyBnETj464bIErUChKo4rriqEoOFDkKuUORAAlRcKiDZiKaiScJTsRQNwBa9GVk04WzStyQNOdYLx3bB17DmQPLUr10ui8h2jHfF9LE/BB5KZvEZWQHarRnisDbMYSs4oIuhcXbIOqKALuFAWDiRqAbc76fiiOn3YLGanJ8g9px4gHg356rkZwtJ42y8b5FLYb6f2KCoPJEp5XNcHNdhc0gh17EEG4II0Qy1VQfWezP8AxNfG7HIy0zmhss0L48FRb2XSQPFsY95rmpbtf2hFa7eufUyGwG73UUOEDSzxK/8AlXzABXbiGmIeH9EG++vZf26mPnijjn874m29FpUPaV8ILW1jDE6+KLdyPD+joXs3ZPibLx5nfxc7zJPzVC8nig9RtDtBE9wMUQibYB2ZAe7i/CSRH+6CQEu+djsw8G/HFGPg97SPReeXbIN50YPFp67+mZ8MZ+aVdFnYNv4TwkfC6y7LiB2qjt7OIiwxE5YXZ3ZmBmLJQvKvPMXYb37rQNb6cfS3ohILCQrco9pOZEGU8jKcFv8AmH33c8h4hzx3jHlYMZw1F81g2Usg+r7M7cQjZhpXfRWCKOVpc3Hvp3bt4jwx4M++WEvJHsnTJebY+4XjQSvS7Nf3Gfuj8kFqpud0unJ80o4IKochVyhyIAErqqSog1ICtKnSELVp0jEGjSsWtTtWdAnoigYeF53bVPc30yOa9C5yyNqjJB5eppP2bj0PK/osBjg0m7Gvz4r1kzSWEW1Kx5aQA3LQeYsBfz5oEg6F2sb2Hm03HxVX0zPqStPR3cd8cimRs8nR8Z8XYD54gB8SoNnSHRof0Y5kp9GOJQZ7oyNR56j1VmJh9FI3MxyNHEljm/MIcbB/YgoJMO6Le8OnAqjn3GYZf3tHeBtr5pieLujX2vwKWiNjoOGZF9dEFII3HEWsLwxuJ2RIa3TEbcLnXTNBW6ZmsZjic6KQNa9kl7OOEuY5mWQu0sNvJYkgzQadJsjHexdlLgyGIBuVnE6DX4JbatJuZpIwcYjkc0SDIPANg7zW92e7W1NIP2FRHE5+APu27ZA2+EkgXuL8eZztkFNp7RdNKZX7rHKXPkc2SSMOcXuBLe8Rna/mgwsfU/NSy0cfi4cjPE5vk17SuOiuLAXvwYyGRzfNjgfggVYxrtXYDxy7p8LaHxy6hEkpXk91jnDgWjEP4SbeqpPCWtBs4ZkODhhPHCbciAfNpQMXQIGTQy/ZS/cd+SGaWT7OT7rvyQcXQKX6BBZzSDYgg8jkVxcJ8OC5iQdUUxK4bkCeN8rXyFs/n6ILUcOORjMQZjexuI6NxEDEeguvS09NgGC+LAXtxWLSbPcL4TmPBYWzZ93LG8EAskY9udwHMOIGw6gcV6KnqDIA9zsbpC573+89zi5x9SUFJGpd8a0XtS72IM54shPKdljScrUCxUXSFEG3TrTpysWCYJ6KoCDdhenonLBhqgno6xBrgIMlJi4peOtTDK5qALtm/rgsfaOxi7ReiNc3mhPqmlB4p+ynAm4NklUQgcF7edwKzp6BjkHk2TOZ7Dns/dcW/JFG1ZuMjn9H2k/nutt+xY+qVk2EODj6IMl1UCLWsb3FgAAb38gh1DD7WrQMjlllYA2081ov2C7g4H4KpoZmAgMDgbcWn5+SDLmdlbgCbeDmgEfwhQPscQLL8sDMulrWRZ6SXix3wNvRLOgePqP+6UDo2zJbCWwuHIxM/ABLy1wOsMAytkwt+TksYne670Krune670KA30lv2MX/ALB8nromZ9iw+BkH/wBFA3Lvdd6Fd3Lvdd6FA2KsWwiBtuRdI4emLoh7xv2DfvP/ADQN073XehU3b/dd6FAxib9gPvP/ADUy+wb95/8AuQMD/dd6FdDX8nehQFdCTpE0f9x/FyXmYWmxaB53/FFG85O9FJC8ixagXXQV3dO5FTcu5FA1S04fkLC2pN8lvUMWBtr366eg4LDpnOblhstGKpPJBr4kNyUbUlQ1CC0qSmCM+ZLySIAEKLheogkcyZimWW16K2RBsR1HVNR1Swo5s9fgbI7ZuvzCDdbVdUZtV1/FYcMhOgJ6AG/6zR2vPGzfE/rmg1xU9SrCo6lY5lsrxzXysb8tUGsanqpvlm73O3REZJfPx9UDwkUxJAyHofMFdDnefIWKB7F4qzSswVJ43+C4+qKB+VwQSPFJNqESOrcDcc8tMvVA62jcRk2Q+AJS01OW6hw8R8F7nYslQGgPpqiW4y71MAL5m15AeX5J3aZlLR/l5rHgforwSdBcS/IIPmBaphCc7QbyN5D4nQl2ejXYuWbXEW8Fjic8c0DmAKOjCAyS6tv8rII5ipZFjsVwtQCc0KmBWe5U3tkHN2qkBSSrtwQDPdAzG2+gumGw9LJ7YdCHgu3rGObnhviP3b+HqtuvnbG0B2B148wS1t3dDiNuOduHTMPIPyQ3SJmtnbfS3hmFlST+IzQMl6A96CZvFUc9AXGol8S6gqCrhyFddBQHD+pRBITrzyN/klr3RA5A40n3j+B/XgmI+h/XgQkRL8lffW55jPl+tUD7J75a5X11yAGv69FKaQEnIjMX5ZC1hY/vfrVAjIG/XgddckUBt+vLMcRZBo74XItcfM/lqfJRs19bd25HmDy8v6pA2F7EjhnmLc7cTdU9knhrY5m/og0y7mdb65F3xQXuufaKVdOcr6ZXHC3RUNRy9OSBnekcVHPKSdMub4oHHOsm6WZhIB4Znhpnr4LHfOuwz2IyBz0OYKD632f72F0ZnbGTaz5ZB3cIs5neII10W3XyvDSW4gW5k3ADgOWeS+b7E7UiM5QR3s0YgcLrDKwJ4dFsVXbEDFhAOQ+tmDccxbn8EGP2glY5xa+MtdwdJK6Q55ZC5A8F5iW1+7a3TRPbX2q2XIj4gm/iAscvQNNlVjKkcaglQaEcwCuZb8VmY+q6JEDkj0F8qA+RV3iDrymaeAu1LQBzSmJFjfoc8ig+jbBErI+6WubYGwBaT53OfjyKm2J3gHHKwNsb2GLXgbloGvL+uJsrajcI0bhw2uW2OuWfmdVeumEg1LnWuM2kAaZcBp+KDBr5hi7rgddAB/KVmSPzztfzWjVP9o2zJN9cunFZLrlBLrhKrdcug6oqqIIooog6CrAqKILtKvdRRB13nx9V1kluaiiDpPH+6gN9T4a+i6ogq9yriCiiAZcoXqKIOYleNtzquKIN3Z+z6Z1sVQ9rza7WsJtzF7WTM2xYGgvNQ8tsCAGnEb6C/wCtQoogxZ6RoGLeAgnk6/U6JZ7BwJz4WUUQBJXA5RRB3F4rokUUQcL1wOUUQQuV2Dqoogahpg4e3bpnonhQu1Dj3RYG+Y9T1UUQZlRG5ps4m/igElRRBRRRRBFFFEH/2Q==" alt="Car 1"/>
                <h3>Car Model 1</h3>
                <p>$50,000</p>
            </div>
            <div class="car">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKJ2daVApIPObecvLHwyVwaCH-E_-A8z9jg&s" alt="Car 2"/>
                <h3>Car Model 2</h3>
                <p>$40,000</p>
            </div>
            <div class="car">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxUqew64xGxfmuD20vgGkpRy-psTnDY5fVg&ss" alt="Car 3"/>
                <h3>Car Model 3</h3>
                <p>$60,000</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Car Showroom. All rights reserved.</p>
    </footer>
    </div>
    </>
  );
};

export default App;
