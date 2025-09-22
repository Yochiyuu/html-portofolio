        const themeToggle = document.getElementById('theme-toggle-icon');
        const body = document.body;

        function applyTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.classList.remove('fa-moon');
                themeToggle.classList.add('fa-sun');
            } else {
                body.classList.remove('dark-mode');
                themeToggle.classList.remove('fa-sun');
                themeToggle.classList.add('fa-moon');
            }
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeToggle.classList.remove('fa-moon');
                themeToggle.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.classList.remove('fa-sun');
                themeToggle.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        document.addEventListener('DOMContentLoaded', applyTheme);

        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('#nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });