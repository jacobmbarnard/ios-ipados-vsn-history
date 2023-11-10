# iOS and iPadOS Version History Data and Statistics

Provides raw and basic statistical data.

- *Includes iPhone OS history*
- *Does NOT include beta, GM, nor RC history*

## Data

*Note: Some reports may not reflect all iOS or iPadOS 17 data.*

### iOS (and iPhoneOS) Version History Data

| Category       | Format                                                                                                                                |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Raw            | [JSON](json/iOS/raw.json), [CSV](csv/iOS/raw.csv), [YAML](yaml/iOS/raw.yaml), [Markdown](markdown/iOS/raw.md)                         |
| Count          | [JSON](json/iOS/count.json), [CSV](csv/iOS/count.csv), [YAML](yaml/iOS/count.yaml), [Markdown](markdown/iOS/count.md)                 |
| Statistics     | [JSON](json/iOS/stats.json), [CSV](csv/iOS/stats.csv), [YAML](yaml/iOS/stats.yaml), [Markdown](markdown/iOS/stats.md)                 |
| Metastatistics | [JSON](json/iOS/metastats.json), [CSV](csv/iOS/metastats.csv), [YAML](yaml/iOS/metastats.yaml), [Markdown](markdown/iOS/metastats.md) |

### iPadOS Version History Data

| Category       | Format                                                                                                                                            |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Raw            | [JSON](json/iPadOS/raw.json), [CSV](csv/iPadOS/raw.csv), [YAML](yaml/iPadOS/raw.yaml), [Markdown](markdown/iPadOS/raw.md)                         |
| Count          | [JSON](json/iPadOS/count.json), [CSV](csv/iPadOS/count.csv), [YAML](yaml/iPadOS/count.yaml), [Markdown](markdown/iPadOS/count.md)                 |
| Statistics     | [JSON](json/iPadOS/stats.json), [CSV](csv/iPadOS/stats.csv), [YAML](yaml/iPadOS/stats.yaml), [Markdown](markdown/iPadOS/stats.md)                 |
| Metastatistics | [JSON](json/iPadOS/metastats.json), [CSV](csv/iPadOS/metastats.csv), [YAML](yaml/iPadOS/metastats.yaml), [Markdown](markdown/iPadOS/metastats.md) |

## Data Collection, Derivation, and Translation Process

- Get data from sources cited
- Input raw data into sheets of ODS files
- Additional sheets created in ODS file with formulae to derive statistics
- Notes added to ODS files to clarify dates and versions when (seemingly) out of order or skipping versions
- Export from ODS sheets to separate CSV files
- Use custom `converter.js` (Node.js) program to convert CSV files into JSON, YAML and Markdown files

### Notes

- Statistics do not include trivial values (e.g. 0 days since last update of a major version on the day of the major version's release).

## Sources

- Apple security releases
  - https://support.apple.com/en-us/HT201222
- Thinky Bits iOS Version History
  - https://willhains.com/iOS-version-history
- Wikipedia
  - https://en.wikipedia.org/wiki/IOS_version_history

## See a discrepancy?

- Create an issue.
- Cite a source.
- Send a message.
