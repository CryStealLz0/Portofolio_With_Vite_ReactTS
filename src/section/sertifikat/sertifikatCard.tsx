// Data
import { ISertificateCard, ISertificateCardProps } from "../../data";
// Icon
import AssignmentIcon from "@mui/icons-material/Assignment";

function SertifikatCard({ sertificateCardData }: ISertificateCardProps) {
    return (
        <section className="content" id="sertificate">
            <div className="bg-card">
                <div className="kotak">
                    <div className="detail-isi">
                        <h1>MySertfikat</h1>
                        <p>
                            Kalian dapat menggeser card di samping untuk melihat
                            berbagai sertifikat yang pernah saya dapat.
                        </p>
                        <div className="icon">
                            <AssignmentIcon fontSize="large" />
                        </div>
                    </div>
                    <div className="kotak-isi">
                        {sertificateCardData.length > 0 ? (
                            sertificateCardData.map(
                                (SertificateCard: ISertificateCard) => (
                                    <div className="kotak-card-isi">
                                        <div className="card-isi">
                                            <div className="isi">
                                                <h3>{SertificateCard.judul}</h3>
                                                <h4>Web Developer Pemula</h4>
                                                <p>
                                                    {
                                                        SertificateCard.description
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <span>"Sertificate is not exited yet"</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SertifikatCard;
