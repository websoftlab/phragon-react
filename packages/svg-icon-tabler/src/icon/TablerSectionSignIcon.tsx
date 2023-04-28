import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSectionSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSectionSignIcon = React.forwardRef<SVGSVGElement, TablerSectionSignIconProps>(
	function TablerSectionSignIcon(props, ref) {
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
				<path d="M9.172 19a3 3 0 1 0 2.828 -4" />
				<path d="M14.83 5a3 3 0 1 0 -2.83 4" />
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSectionSignIcon.displayName = "TablerSectionSignIcon";
}
