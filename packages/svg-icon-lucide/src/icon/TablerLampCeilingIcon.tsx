import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampCeilingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampCeilingIcon = React.forwardRef<SVGSVGElement, TablerLampCeilingIconProps>(
	function TablerLampCeilingIcon(props, ref) {
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
				<path d="M12 2v5" />
				<path d="M6 7h12l4 9H2l4-9Z" />
				<path d="M9.17 16a3 3 0 1 0 5.66 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLampCeilingIcon.displayName = "TablerLampCeilingIcon";
}
