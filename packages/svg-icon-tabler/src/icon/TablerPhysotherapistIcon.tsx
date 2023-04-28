import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhysotherapistIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhysotherapistIcon = React.forwardRef<SVGSVGElement, TablerPhysotherapistIconProps>(
	function TablerPhysotherapistIcon(props, ref) {
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
				<path d="M9 15l-1 -3l4 -2l4 1h3.5" />
				<path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 17v-7" />
				<path d="M8 20h7l1 -4l4 -2" />
				<path d="M18 20h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhysotherapistIcon.displayName = "TablerPhysotherapistIcon";
}
