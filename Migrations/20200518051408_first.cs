using Microsoft.EntityFrameworkCore.Migrations;

namespace api_angular.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Titre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 1, "perspiciatis" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 2, "ipsam" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 3, "quis" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 4, "ut" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 5, "sint" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 6, "rerum" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 7, "qui" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 8, "porro" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 9, "laborum" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 10, "rerum" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");
        }
    }
}
