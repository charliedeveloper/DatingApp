using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDtos
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "Passowrd must be between 4 to 8 characters")]
        public string Password { get; set; }
    }
}