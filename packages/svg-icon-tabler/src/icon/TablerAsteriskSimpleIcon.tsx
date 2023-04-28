import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAsteriskSimpleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAsteriskSimpleIcon = React.forwardRef<SVGSVGElement, TablerAsteriskSimpleIconProps>(
	function TablerAsteriskSimpleIcon(props, ref) {
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
				<path d="M12 12v-9" />
				<path d="M12 12l-9 -2.5" />
				<path d="M12 12l9 -2.5" />
				<path d="M12 12l6 8.5" />
				<path d="M12 12l-6 8.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAsteriskSimpleIcon.displayName = "TablerAsteriskSimpleIcon";
}
