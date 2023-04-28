import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAwardIcon = React.forwardRef<SVGSVGElement, TablerAwardIconProps>(function TablerAwardIcon(
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
			<path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
			<path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
			<path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAwardIcon.displayName = "TablerAwardIcon";
}
