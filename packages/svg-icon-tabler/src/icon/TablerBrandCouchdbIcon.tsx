import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCouchdbIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCouchdbIcon = React.forwardRef<SVGSVGElement, TablerBrandCouchdbIconProps>(
	function TablerBrandCouchdbIcon(props, ref) {
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
				<path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2z" />
				<path d="M6 15h12" />
				<path d="M6 18h12" />
				<path d="M21 11v7" />
				<path d="M3 11v7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCouchdbIcon.displayName = "TablerBrandCouchdbIcon";
}
