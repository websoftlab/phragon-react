import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAsteriskIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAsteriskIcon = React.forwardRef<SVGSVGElement, TablerAsteriskIconProps>(function TablerAsteriskIcon(
	props,
	ref
) {
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
			<path d="M12 12l8 -4.5" />
			<path d="M12 12v9" />
			<path d="M12 12l-8 -4.5" />
			<path d="M12 12l8 4.5" />
			<path d="M12 3v9" />
			<path d="M12 12l-8 4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAsteriskIcon.displayName = "TablerAsteriskIcon";
}
