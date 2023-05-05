import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSeparatorHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSeparatorHorizontalIcon = React.forwardRef<SVGSVGElement, TablerSeparatorHorizontalIconProps>(
	function TablerSeparatorHorizontalIcon(props, ref) {
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
				<path d="M3 12 L21 12" />
				<path d="M8 8 L12 4 L16 8" />
				<path d="M16 16 L12 20 L8 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSeparatorHorizontalIcon.displayName = "TablerSeparatorHorizontalIcon";
}
