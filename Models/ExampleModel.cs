using System.ComponentModel.DataAnnotations;

public class ExampleModel
{
    [Required]
    public string Name { get; set; }
    [Required]
    public int Age { get; set; }
}