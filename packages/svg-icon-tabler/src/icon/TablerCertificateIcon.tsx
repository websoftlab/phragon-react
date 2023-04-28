import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCertificateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCertificateIcon = React.forwardRef<SVGSVGElement, TablerCertificateIconProps>(
	function TablerCertificateIcon(props, ref) {
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
				<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
				<path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
				<path d="M6 9l12 0" />
				<path d="M6 12l3 0" />
				<path d="M6 15l2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCertificateIcon.displayName = "TablerCertificateIcon";
}
