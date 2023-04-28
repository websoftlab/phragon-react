import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCertificate2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCertificate2OffIcon = React.forwardRef<SVGSVGElement, TablerCertificate2OffIconProps>(
	function TablerCertificate2OffIcon(props, ref) {
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
				<path d="M12 12a3 3 0 1 0 3 3" />
				<path d="M11 7h3" />
				<path d="M10 18v4l2 -1l2 1v-4" />
				<path d="M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCertificate2OffIcon.displayName = "TablerCertificate2OffIcon";
}
