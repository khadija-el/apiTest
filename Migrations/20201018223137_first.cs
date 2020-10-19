using System;
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

            migrationBuilder.CreateTable(
                name: "Projets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nom = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Git = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Technologie = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projets", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 1, "aspernatur" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 9, "aut" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 8, "rem" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 7, "porro" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 6, "porro" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 10, "temporibus" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 4, "ipsa" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 3, "sed" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 2, "amet" });

            migrationBuilder.InsertData(
                table: "Blogs",
                columns: new[] { "Id", "Titre" },
                values: new object[] { 5, "ad" });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 9, new DateTime(2020, 10, 19, 4, 32, 56, 445, DateTimeKind.Local).AddTicks(757), "Magni eveniet accusamus sed minima et enim iusto.", null, "https://picsum.photos/640/480/?image=27", "eum", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 1, new DateTime(2020, 10, 19, 7, 38, 44, 620, DateTimeKind.Local).AddTicks(1992), "Adipisci et cumque assumenda ut et recusandae.", null, "https://picsum.photos/640/480/?image=496", "voluptas", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 2, new DateTime(2020, 10, 19, 14, 42, 44, 537, DateTimeKind.Local).AddTicks(8042), "Occaecati vero placeat voluptas.", null, "https://picsum.photos/640/480/?image=5", "esse", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 3, new DateTime(2020, 10, 19, 19, 40, 40, 933, DateTimeKind.Local).AddTicks(1758), "Qui non est qui blanditiis animi enim unde corrupti praesentium.", null, "https://picsum.photos/640/480/?image=1084", "ea", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 4, new DateTime(2020, 10, 19, 16, 5, 4, 310, DateTimeKind.Local).AddTicks(2079), "Velit nostrum consequuntur cupiditate quibusdam enim.", null, "https://picsum.photos/640/480/?image=708", "quas", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 5, new DateTime(2020, 10, 19, 14, 15, 57, 638, DateTimeKind.Local).AddTicks(5816), "Soluta quae mollitia sit non officiis dicta totam.", null, "https://picsum.photos/640/480/?image=895", "et", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 6, new DateTime(2020, 10, 19, 5, 37, 59, 694, DateTimeKind.Local).AddTicks(2877), "Nihil molestiae dolore dolorem a.", null, "https://picsum.photos/640/480/?image=481", "consequatur", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 7, new DateTime(2020, 10, 19, 4, 32, 42, 989, DateTimeKind.Local).AddTicks(9692), "Esse rerum sit distinctio blanditiis porro odit.", null, "https://picsum.photos/640/480/?image=97", "aut", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 8, new DateTime(2020, 10, 19, 8, 27, 57, 986, DateTimeKind.Local).AddTicks(8526), "Nemo illo quae velit alias consequuntur voluptatem laborum.", null, "https://picsum.photos/640/480/?image=404", "ad", null, null });

            migrationBuilder.InsertData(
                table: "Projets",
                columns: new[] { "Id", "Date", "Description", "Git", "ImageUrl", "Nom", "Technologie", "Url" },
                values: new object[] { 10, new DateTime(2020, 10, 19, 23, 1, 23, 220, DateTimeKind.Local).AddTicks(3652), "Voluptate culpa cupiditate architecto nesciunt.", null, "https://picsum.photos/640/480/?image=279", "aut", null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Projets");
        }
    }
}
