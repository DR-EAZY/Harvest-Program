export const shareProgramme = async () => {
  const shareData = {
    title: "Harvest Thanksgiving Programme",
    text: "Join us for our Annual Harvest Thanksgiving Service.",
    url: window.location.origin,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  } else {
    await navigator.clipboard.writeText(window.location.origin);
    alert("Programme link copied to clipboard.");
  }
};