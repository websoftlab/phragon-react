import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFaceIdErrorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFaceIdErrorIcon = React.forwardRef<SVGSVGElement, TablerFaceIdErrorIconProps>(
	function TablerFaceIdErrorIcon(props, ref) {
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
				<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
				<path d="M4 16v2a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v2" />
				<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
				<path d="M9 10h.01" />
				<path d="M15 10h.01" />
				<path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFaceIdErrorIcon.displayName = "TablerFaceIdErrorIcon";
}
