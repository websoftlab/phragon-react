import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVenetianMaskIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVenetianMaskIcon = React.forwardRef<SVGSVGElement, TablerVenetianMaskIconProps>(
	function TablerVenetianMaskIcon(props, ref) {
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
				<path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
				<path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
				<path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVenetianMaskIcon.displayName = "TablerVenetianMaskIcon";
}
