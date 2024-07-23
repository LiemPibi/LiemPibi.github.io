document.addEventListener('DOMContentLoaded', function() {
    // Simulasikan data profil (ganti ini dengan data dari database)
    const profileData = {
        fullName: "John Doe",
        birthDate: "1990-01-01",
        jobTitle: "Software Engineer",
        email: "johndoe@example.com",
        phoneNumber: "08123456789"
    };

    // Tampilkan data profil ke halaman
    const profileView = document.getElementById('profile-view');
    profileView.innerHTML = `
        <p>Nama Lengkap: ${profileData.fullName}</p>
        <p>Tanggal Lahir: ${profileData.birthDate}</p>
        <p>Jabatan: ${profileData.jobTitle}</p>
        <p>Alamat Email: ${profileData.email}</p>
        <p>Nomor Telepon: ${profileData.phoneNumber}</p>
    `;

    // Tombol Edit Profile
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editProfileForm = document.getElementById('edit-profile-form');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');

    editProfileBtn.addEventListener('click', function() {
        profileView.style.display = 'none';
        editProfileForm.style.display = 'block';

        // Isi form dengan data profil
        document.getElementById('full-name').value = profileData.fullName;
        document.getElementById('birth-date').value = profileData.birthDate;
        document.getElementById('job-title').value = profileData.jobTitle;
        document.getElementById('email').value = profileData.email;
        document.getElementById('phone-number').value = profileData.phoneNumber;
    });

    cancelEditBtn.addEventListener('click', function() {
        editProfileForm.style.display = 'none';
        profileView.style.display = 'block';
    });

    // Form Edit Profile
    const editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil data dari form
        const fullName = document.getElementById('full-name').value;
        const birthDate = document.getElementById('birth-date').value;
        const jobTitle = document.getElementById('job-title').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phone-number').value;

        // Simpan data ke database (ganti ini dengan kode untuk menyimpan data ke database)
        profileData.fullName = fullName;
        profileData.birthDate = birthDate;
        profileData.jobTitle = jobTitle;
        profileData.email = email;
        profileData.phoneNumber = phoneNumber;

        // Perbarui tampilan profil
        profileView.innerHTML = `
            <p>Nama Lengkap: ${profileData.fullName}</p>
            <p>Tanggal Lahir: ${profileData.birthDate}</p>
            <p>Jabatan: ${profileData.jobTitle}</p>
            <p>Alamat Email: ${profileData.email}</p>
            <p>Nomor Telepon: ${profileData.phoneNumber}</p>
        `;

        editProfileForm.style.display = 'none';
        profileView.style.display = 'block';
    });
});
