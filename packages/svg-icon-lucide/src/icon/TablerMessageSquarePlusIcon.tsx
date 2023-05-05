import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageSquarePlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageSquarePlusIcon = React.forwardRef<SVGSVGElement, TablerMessageSquarePlusIconProps>(
	function TablerMessageSquarePlusIcon(props, ref) {
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
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				<path d="M9 10 L15 10" />
				<path d="M12 7 L12 13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageSquarePlusIcon.displayName = "TablerMessageSquarePlusIcon";
}
