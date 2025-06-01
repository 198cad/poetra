import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MePage() {
  // Data dummy untuk demonstrasi
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Pengembang perangkat lunak dengan fokus pada aplikasi web.",
    memberSince: "Januari 2023",
  };

  const statistics = {
    tasksCompleted: 150,
    documentsCreated: 75,
    averageCompletionTime: "2 hari",
  };

  const pendingTasks = [
    { id: 1, name: "Revisi modul otentikasi", dueDate: "10 Juni 2025" },
    { id: 2, name: "Implementasi fitur notifikasi", dueDate: "15 Juni 2025" },
  ];

  const achievements = [
    { id: 1, name: "Kontributor Terbaik Q1 2025", date: "April 2025" },
    { id: 2, name: "Penyelesaian 100 Tugas", date: "Maret 2025" },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Informasi Profil */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Profil</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Nama:</strong> {userProfile.name}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Bio:</strong> {userProfile.bio}
            </p>
            <p>
              <strong>Bergabung Sejak:</strong> {userProfile.memberSince}
            </p>
          </CardContent>
        </Card>

        {/* Statistik Pekerjaan */}
        <Card>
          <CardHeader>
            <CardTitle>Statistik Pekerjaan</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Tugas Selesai:</strong> {statistics.tasksCompleted}
            </p>
            <p>
              <strong>Dokumen Dibuat:</strong> {statistics.documentsCreated}
            </p>
            <p>
              <strong>Waktu Penyelesaian Rata-rata:</strong> {statistics.averageCompletionTime}
            </p>
          </CardContent>
        </Card>

        {/* Tugas yang Perlu Diselesaikan */}
        <Card>
          <CardHeader>
            <CardTitle>Tugas yang Perlu Diselesaikan</CardTitle>
          </CardHeader>
          <CardContent>
            {pendingTasks.length > 0 ? (
              <ul>
                {pendingTasks.map((task) => (
                  <li key={task.id}>
                    {task.name} (Batas Waktu: {task.dueDate})
                  </li>
                ))}
              </ul>
            ) : (
              <p>Tidak ada tugas yang tertunda.</p>
            )}
          </CardContent>
        </Card>

        {/* Pencapaian */}
        <Card>
          <CardHeader>
            <CardTitle>Pencapaian</CardTitle>
          </CardHeader>
          <CardContent>
            {achievements.length > 0 ? (
              <ul>
                {achievements.map((achievement) => (
                  <li key={achievement.id}>
                    {achievement.name} (Tanggal: {achievement.date})
                  </li>
                ))}
              </ul>
            ) : (
              <p>Belum ada pencapaian.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
