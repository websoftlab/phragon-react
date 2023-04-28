import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCandleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCandleIcon = React.forwardRef<SVGSVGElement, TablerCandleIconProps>(function TablerCandleIcon(
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
			<path d="M9 21h6v-9a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1v9z" />
			<path d="M12 3l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCandleIcon.displayName = "TablerCandleIcon";
}
