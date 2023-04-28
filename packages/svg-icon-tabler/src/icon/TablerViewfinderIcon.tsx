import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerViewfinderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerViewfinderIcon = React.forwardRef<SVGSVGElement, TablerViewfinderIconProps>(
	function TablerViewfinderIcon(props, ref) {
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
				<path d="M12 3l0 4" />
				<path d="M12 21l0 -3" />
				<path d="M3 12l4 0" />
				<path d="M21 12l-3 0" />
				<path d="M12 12l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerViewfinderIcon.displayName = "TablerViewfinderIcon";
}
