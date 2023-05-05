import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWineIcon = React.forwardRef<SVGSVGElement, TablerWineIconProps>(function TablerWineIcon(props, ref) {
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
			<path d="M8 22h8" />
			<path d="M7 10h10" />
			<path d="M12 15v7" />
			<path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWineIcon.displayName = "TablerWineIcon";
}
