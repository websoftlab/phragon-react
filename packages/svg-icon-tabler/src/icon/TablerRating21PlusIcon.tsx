import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRating21PlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRating21PlusIcon = React.forwardRef<SVGSVGElement, TablerRating21PlusIconProps>(
	function TablerRating21PlusIcon(props, ref) {
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
				<path d="M13 15v-6" />
				<path d="M15.5 12h3" />
				<path d="M17 10.5v3" />
				<path d="M7 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRating21PlusIcon.displayName = "TablerRating21PlusIcon";
}
