import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRegisteredIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRegisteredIcon = React.forwardRef<SVGSVGElement, TablerRegisteredIconProps>(
	function TablerRegisteredIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" />
				<path d="M14 15l-2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRegisteredIcon.displayName = "TablerRegisteredIcon";
}
