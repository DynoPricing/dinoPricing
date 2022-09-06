import { Page, Card, DataTable, Button, Badge } from "@shopify/polaris";
import React from "react";

export default function Dashboard() {
	const rows = [
		[
			"Emerald Silk Gown",
			<Badge status="success" progress="complete" />,
			124689,
			140,
			"122",
		],
		[
			"Mauve Cashmere Scarf",
			<Badge status="success" progress="complete" />,
			124533,
			83,
			"90",
		],
		[
			"Navy Merino Wool Blazer with khaki chinos and yellow belt",
			<Badge status="success" progress="complete" />,
			124518,
			32,
			"14240",
		],
	];

	return (
		<Page title="Product Groups">
			<Card>
				<DataTable
					columnContentTypes={[
						"text",
						"numeric",
						"numeric",
						"numeric",
						"numeric",
					]}
					headings={[
						"Group number 1",
						"Status",
						"Revenue",
						"Days",
						"Impression",
					]}
					rows={rows}
					totals={["", "", "", 255, "8300"]}
				/>
			</Card>
		</Page>
	);
}
