import os
import pandas as pd


if __name__ == "__main__":
	# read xlsx file dataset tab
	df = pd.read_excel('dataset.xlsx', sheet_name='dataset')
	# split dataset across regions
	dfs = {
		region: df[df['practice_region'] == region]
		for region in df['practice_region'].unique()
	}
	for region_name, region_df in dfs.items():
		region_df.to_csv(f'sub_datasets/{region_name}.tsv', sep="\t")
	# remove nan.tsv
	os.remove('sub_datasets/nan.tsv')
