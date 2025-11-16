// Utility function to check if UMKM is currently open
export const checkIsOpen = (schedule?: string) => {
  if (!schedule) return false;

  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentTime = currentHour * 60 + now.getMinutes(); // Convert to minutes for easier comparison

  // Handle 24 hour operations
  if (schedule.includes("24 jam")) {
    return true;
  }

  // Handle Monday-Saturday with Friday off
  if (schedule.includes("Senin – Sabtu")) {
    if (currentDay === 0) return false; // Sunday
    if (schedule.includes("Jumat Libur") && currentDay === 5) return false; // Friday

    // For "12.00 SD Sehabisnya" - open from 12:00 till late
    if (schedule.includes("12.00") && schedule.includes("Sehabisnya")) {
      return currentHour >= 12;
    }
  }

  // Handle daily operations
  if (
    schedule.includes("Setiap hari") ||
    schedule.includes("Buka setiap hari")
  ) {
    // Extract time ranges like "08.00 – 22.00" or "15.00 – 01.00"
    const timeMatch = schedule.match(
      /(\d{1,2})\.(\d{2})\s*(?:–|-)\s*(\d{1,2})\.(\d{2})/
    );

    if (timeMatch) {
      const startHour = parseInt(timeMatch[1]);
      const startMinute = parseInt(timeMatch[2]);
      const endHour = parseInt(timeMatch[3]);
      const endMinute = parseInt(timeMatch[4]);

      const startTime = startHour * 60 + startMinute;
      const endTime = endHour * 60 + endMinute;

      if (endTime < startTime) {
        // Crosses midnight (e.g., 15:00 - 01:00)
        return currentTime >= startTime || currentTime <= endTime;
      } else {
        // Same day (e.g., 08:00 - 22:00)
        return currentTime >= startTime && currentTime <= endTime;
      }
    }

    // Handle "jam 10 pagi – jam 11 Malem"
    if (schedule.includes("10 pagi") && schedule.includes("11 Malem")) {
      return currentHour >= 10 || currentHour <= 23;
    }
  }

  return false;
};
