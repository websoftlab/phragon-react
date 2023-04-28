import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileCertificateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileCertificateIcon = React.forwardRef<SVGSVGElement, TablerFileCertificateIconProps>(
	function TablerFileCertificateIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
				<path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileCertificateIcon.displayName = "TablerFileCertificateIcon";
}
