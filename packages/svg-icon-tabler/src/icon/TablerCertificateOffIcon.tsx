import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCertificateOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCertificateOffIcon = React.forwardRef<SVGSVGElement, TablerCertificateOffIconProps>(
	function TablerCertificateOffIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M12.876 12.881a3 3 0 0 0 4.243 4.243m.588 -3.42a3.012 3.012 0 0 0 -1.437 -1.423" />
				<path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
				<path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2m4 0h10a2 2 0 0 1 2 2v10" />
				<path d="M6 9h3m4 0h5" />
				<path d="M6 12h3" />
				<path d="M6 15h2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCertificateOffIcon.displayName = "TablerCertificateOffIcon";
}
