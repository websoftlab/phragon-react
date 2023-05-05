import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListVideoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListVideoIcon = React.forwardRef<SVGSVGElement, TablerListVideoIconProps>(
	function TablerListVideoIcon(props, ref) {
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
				<path d="M12 12H3" />
				<path d="M16 6H3" />
				<path d="M12 18H3" />
				<path d="m16 12 5 3-5 3v-6Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListVideoIcon.displayName = "TablerListVideoIcon";
}
