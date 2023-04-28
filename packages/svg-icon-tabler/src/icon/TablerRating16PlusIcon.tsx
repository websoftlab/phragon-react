import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRating16PlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRating16PlusIcon = React.forwardRef<SVGSVGElement, TablerRating16PlusIconProps>(
	function TablerRating16PlusIcon(props, ref) {
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
				<path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M7 15v-6" />
				<path d="M15.5 12h3" />
				<path d="M17 10.5v3" />
				<path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRating16PlusIcon.displayName = "TablerRating16PlusIcon";
}
