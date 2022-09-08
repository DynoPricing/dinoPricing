/**
 * Product Group coponent representing a single group,
 * has to get the data about the products and insert to data table,
 * each group can add products
 */

import { Page, Card, DataTable, Badge } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState } from "react";

//data example

export default function ProductGroup() {
	const [open, setOpen] = useState(false);
	const [rows, setRows] = useState([]);

	// const [rows, setRows] = useState([]);
	// setRows([
	// 	[
	// 		"Emerald Silk Gown",
	// 		<Badge status="success" progress="complete" />,
	// 		124689,
	// 		140,
	// 		"122",
	// 	],
	// [
	// 	"Mauve Cashmere Scarf",
	// 	<Badge status="success" progress="complete" />,
	// 	124533,
	// 	83,
	// 	"90",
	// ],
	// 	[
	// 		"Navy Merino Wool Blazer with khaki chinos and yellow belt",
	// 		<Badge status="success" progress="complete" />,
	// 		124518,
	// 		32,
	// 		"14240",
	// 	],
	// ]);

	/**
	 * add product to product group
	 * @param {*} p product from ResourcePicker
	 */
	const addProduct = (p) => {
		setRows((rows) => [
			...rows,
			[p.handle, <Badge status="success" progress="complete" />, 0, 0, 0],
		]);
	};

	return (
		<Page
			title="Product Groups"
			primaryAction={{
				content: "add products",
				onAction: () => {
					setOpen(true);
				},
			}}
		>
			<ResourcePicker
				resourceType="Product"
				open={open}
				onCancel={() => setOpen(false)}
				onSelection={(productsSelction) => {
					setOpen(false);
					productsSelction.selection.forEach((p) => {
						addProduct(p);
						// sent to the server and store in D.B
					});
				}}
			/>
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
					totals={["", "", "", "", ""]}
				/>
			</Card>
		</Page>
	);
}
