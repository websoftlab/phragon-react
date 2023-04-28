import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignLeftIcon = React.forwardRef<SVGSVGElement, TablerAlignLeftIconProps>(
	function TablerAlignLeftIcon(props, ref) {
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
				<path d="M4 6l16 0" />
				<path d="M4 12l10 0" />
				<path d="M4 18l14 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignLeftIcon.displayName = "TablerAlignLeftIcon";
}
