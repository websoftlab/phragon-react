import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipVerticalIcon = React.forwardRef<SVGSVGElement, TablerFlipVerticalIconProps>(
	function TablerFlipVerticalIcon(props, ref) {
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
				<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
				<path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipVerticalIcon.displayName = "TablerFlipVerticalIcon";
}
