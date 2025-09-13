import Swal from 'sweetalert2';

export const successAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'success',
    title,
    text,
    confirmButtonColor: '#10b981',
    timer: 3000
  });
};

export const errorAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: '#ef4444',
    timer: 3000
  });
};

export const infoAlert = (title, text = '') => {
  return Swal.fire({
    icon: 'info',
    title,
    text,
    confirmButtonColor: '#3b82f6',
    timer: 3000
  });
};

export const confirmAlert = (title, text = '') => {
  return Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#10b981',
    cancelButtonColor: '#ef4444',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  });
};

// Keep the old triggerAlert for backward compatibility
export const triggerAlert = {
  success: successAlert,
  error: errorAlert,
  info: infoAlert,
  confirm: confirmAlert
};